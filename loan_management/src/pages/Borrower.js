import React from 'react'

const Borrower = () => {
  return (
    <main id="main" className="main">
    <div className="pagetitle">
        <h1>Borrower List</h1>
        <nav>
        </nav>
    </div>{/* End Page Title */}
    <section className="section dashboard">
        <div className="row">
            {/* Left side columns */}
            <div className="col-lg-12">
                <div className="row">
                    {/* Sales Card */}
                    <div className="col-12">
                        <div className="card recent-sales overflow-auto">
                            <div className="card-body">
                                <a href="#" class="btn btn-primary mt-3 float-end" data-bs-toggle="modal"
                                    data-bs-target="#addNewPaymentModal">+ New Borrower</a>
                                <h5 className="card-title">Recent Borrower</h5>
                                <div className="modal fade" id="addNewPaymentModal" tabindex="-1" aria-labelledby="addNewPaymentModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="addNewPaymentModalLabel">Add New Borrower</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="mb-3">
                                                        <label for="loanReferenceNo" className="form-label">Borrower</label>
                                                        <input type="text" className="form-control" id="loanReferenceNo" aria-describedby="loanReferenceNoHelp" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="name" className="form-label">Current Loan</label>
                                                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="amount" className="form-label">Next Payment Schedule</label>
                                                        <input type="number" className="form-control" id="amount" aria-describedby="amountHelp" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Add Payment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <table className="table table-borderless datatable">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Borrower</th>
                                            <th scope="col">Current Loan</th>
                                            <th scope="col">Next Payment Schedule</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>#2049</th>
                                            <td>Ashleigh Langosh</td>
                                            <td>At recusandae consectetur</td>
                                            <td>$147</td>
                                            <td>
                                                <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editModal<?= $student['id']; ?>">Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#editModal<?= $student['id']; ?>">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>{/* End Recent Sales */}
                </div>
            </div>{/* End Left side columns */}
            {/* Right side columns */}
            <div className="col-lg-4">
                {/* News & Updates Traffic */}
            </div>{/* End Right side columns */}
        </div>
    </section>
</main>
  )
}

export default Borrower