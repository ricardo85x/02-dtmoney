import { useContext } from 'react'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {

    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type == "deposit") {
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc

    }, {deposit:0, withdraw: 0, total: 0})



    return (
        <Container>

            <div>
                <header>
                    <p>Entries</p>
                    <img src={incomeImage} alt="Incomme" />
                </header>
                <strong>

                    {
                        Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(summary.deposit)
                    }

                </strong>
            </div>

            <div>
                <header>
                    <p>Withdraw</p>
                    <img src={outcomeImage} alt="Outcome" />

                </header>
                <strong>
                    -
                   {
                        Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(summary.withdraw)
                    }

                </strong>
            </div>



            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt="Total" />
                </header>
                <strong>

                    {
                        Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(summary.total)
                    }

                </strong>
            </div>

        </Container>
    )
}