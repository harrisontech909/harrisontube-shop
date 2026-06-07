import "./globals.css";

export default function Home() {
    return (
        <main>
            <h1 className="main-title">
                Welcome to HarrisonTube Shop
            </h1>
            <div className="first-container">
                <h2 className="first-title">
                    First why don't you check out our HarrisonTube channel?
                </h2>
                <p className="first-description">
                    There you can find all the latest videos about me.
                </p>
                <a href="https://harrisontube.com" className="first-link">
                    <button className="first-button">
                        Watch HarrisonTube
                    </button>
                </a>
            </div>
        </main>
    )  
}