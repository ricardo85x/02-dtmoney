import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entries</p>
                    <img src={incomeImage} alt="Incomme"/>
                </header>
                <strong>$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Entries</p>
                    <img src={outcomeImage} alt="Outcome"/>
                </header>
                <strong>- $500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entries</p>
                    <img src={totalImage} alt="Total"/>
                </header>
                <strong>$500,00</strong>
            </div>

        </Container>
    )
}