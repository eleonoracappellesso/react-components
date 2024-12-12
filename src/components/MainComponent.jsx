
function MainComponent({ post }) {
    return (
        <>
            <main className="d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "30%" }} key={post.id}>
                    <img src={post.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.text}</p>
                        <a href="#" className="read-btn">Leggi di più</a>
                    </div>
                </div >
            </main>
        </>
    )
}

export default MainComponent;