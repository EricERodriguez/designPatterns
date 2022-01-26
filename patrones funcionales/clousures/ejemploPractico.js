const f = (x)=> {
    return () => console.log(`Rayos ${x}!!`)
}

f('nicolas')()

// ejemplop practico para moongose propiedades de auditoria

const auditProps = {
    createAt: {default : new Date},
    updateAt: {default : new Date},
    createBy: {type: Schema.types.ObjectId, ref: 'User' },
    updateBy: {type: Schema.types.ObjectId, ref: 'User' },
}

const Model = defaultProps => {
    return (name, props) => {
        const schema = moongose.schema({
            ...defaultProps,
            ...props,
        })
        return mongoose.model(name, schema)
    }
}

export const withAudit = Model(auditProps)

/// .... en otro archivo ...

withAudit('Product', {
    name: String,
    desc: String,
})