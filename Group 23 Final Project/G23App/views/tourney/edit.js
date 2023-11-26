//<!-- Content for the Add page -->
<div class="container">
    <div class="row">
        <div class="offset-md-3 col-md-6">
            <h1>Edit Tournament</h1>

            <form class="form" method="POST">
                <div class="form-group">
                    <label for="TournamentNameTextField">Tournament Name</label>
                    <input type="text" class="form-control"
                    id="TournamentNameTextField"
                    placeholder="Enter the Name of the Tournament"
                    name="TournamentName" 
                    value="<%= Book.TournamentName %>"
                    required/>
                </div>

                <div class="form-group">
                    <label for="StartDateTextField">Start Date</label>
                    <input type="text" class="form-control"
                    id="StartDateTextField"
                    placeholder="Enter the Start Date of the Tournament"
                    name="StartDate" 
                    value="<%= Book.StartDate %>"
                    required/>
                </div>

                <div class="form-group">
                    <label for="EndDateTextField">End Date</label>
                    <input type="text" class="form-control"
                    id="EndDateTextField"
                    placeholder="Enter the End Date of the Tournament"
                    name="EndDate" 
                    value="<%= Book.EndDate %>"
                    required/>
                </div>

                <button class="btn btn-primary" type="submit">
                    <i class="fas fa-edit"></i> Submit</button>
                
                    <a href="/bookslist" class="btn btn-warning">
                        <i class="fas fa-undo"></i> Cancel</a>

            </form>
        </div>

    </div>
</div>