export const Jumbotron = ({
                              title,
                              children,
                              ...props
                          }) => (
    <div className="p-5 mb-4 bg-light rounded-3" {...props}>
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{title}</h1>
            {children}
        </div>
    </div>
)
