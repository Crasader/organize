import React, { Component } from 'react';
import Layout from '../../components/Layout';

import { Header } from './styles';

class Transactions extends Component {
    render() {
        return (
            <Layout title="Lançamentos">
                <Header>
                    <div className="row">
                        <div className="col-lg-12">
                            <button type="button" className="btn btn-success">
                                Novo Lançamento <i className="fa fa-plus" />
                            </button>
                        </div>
                    </div>
                </Header>

                <div className="row">
                    <div className="col-lg-12">
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <td width="75%">Janta Mandinho Burguer</td>
                                    <td width="10%">18/01/2019</td>
                                    <td width="10%">-25,00</td>
                                    <td width="5%">
                                        <i className="fa fa-minus-circle negative-circle" />
                                    </td>
                                </tr>
                                <tr>
                                    <td width="75%">Freela</td>
                                    <td width="10%">22/01/2019</td>
                                    <td width="10%">1.200,00</td>
                                    <td width="5%">
                                        <i className="fa fa-plus-circle positive-circle" />
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Saldo Previsto</td>
                                    <td />
                                    <td>1.175,00</td>
                                    <td>
                                        <i className="fa fa-plus-circle positive-circle" />
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Transactions;
