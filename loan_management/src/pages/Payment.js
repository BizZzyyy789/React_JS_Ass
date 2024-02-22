import React from 'react'

const Payment = () => {
  return (
    <main id="main" className="main">
    <div className="pagetitle">
      <h1>Payment List</h1>
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
                    data-bs-target="#addNewPaymentModal">+ New Payment</a>
                  <h5 className="card-title">Recent Payments</h5>
                  <div className="modal fade" id="addNewPaymentModal" tabindex="-1" aria-labelledby="addNewPaymentModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="addNewPaymentModalLabel">Add New Payment</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label for="loanReferenceNo" className="form-label">Loan Reference No</label>
                              <input type="text" className="form-control" id="loanReferenceNo" aria-describedby="loanReferenceNoHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="name" className="form-label">Name</label>
                              <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="amount" className="form-label">Amount</label>
                              <input type="number" className="form-control" id="amount" aria-describedby="amountHelp" />
                            </div>
                            <div className="mb-3">
                              <label for="penalty" className="form-label">Penalty</label>
                              <input type="number" className="form-control" id="penalty" aria-describedby="penaltyHelp" />
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
                        <th scope="col">Loan Reference No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Penalty</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>#2049</th>
                        <td>Ashleigh Langosh</td>
                        <td>At recusandae consectetur</td>
                        <td>$147</td>
                        <td><span className="badge bg-success ">Approved</span></td>
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

export default Payment