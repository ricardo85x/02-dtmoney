import { useContext } from 'react'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {

    const transactions = useContext(TransactionsContext)

    console.log(transactions)

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

                        }).format(
                            transactions.reduce(
                                (total, transaction) =>
                                    total += transaction.type === "deposit" 
                                    ? transaction.amount 
                                    : 0,
                            0)
                        )
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
                        }).format(
                            transactions.reduce(
                                (total, transaction) =>
                                    total += transaction.type === "withdraw" 
                                    ? transaction.amount 
                                    : 0,
                            0)
                        )
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
                        }).format(
                            transactions.reduce(
                                (total, transaction) =>
                                    total +=
                                    transaction.type === "deposit"
                                        ? transaction.amount
                                        : (transaction.amount * -1),
                                0)
                        )
                    }

                </strong>
            </div>

        </Container>
    )
}