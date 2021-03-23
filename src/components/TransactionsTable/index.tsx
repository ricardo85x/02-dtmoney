import { Container } from "./styles";

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website Development</td>
                        <td className="deposit">$ 12,100.00</td>
                        <td>Development</td>
                        <td>03/23/2021</td>
                    </tr>

                    <tr>
                        <td>Renting</td>
                        <td className="withdraw">$ - 1,200.00</td>
                        <td>House</td>
                        <td>03/17/2021</td>
                    </tr>

                   
                </tbody>
            </table>
        </Container>
    );
}