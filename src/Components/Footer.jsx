import Sponsor from "./Sponsor"
export default function Footer() {
    const sponsorText = [
        {text: ' Sponsor Vite '},
        {text: ' Sponsor Evan You '}
    ]
    return(
        <div id="fotter">
            <section id="footer-section">
                {
                sponsorText.map((item) => {
                    return(
                        <Sponsor
                            key={`key-${item.text}`}
                            txt={item.text}
                        />
                    )
                })   
                }
            </section>
        </div>
    )
}