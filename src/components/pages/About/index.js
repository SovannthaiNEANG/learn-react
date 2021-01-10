import React from 'react';
import Button from 'react-bootstrap/Button'
const index = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-4 mb-4 grid-margin">
                <div className="card h-100">
                    <h4 className="card-header">Card Title</h4>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div className="card-footer">
                        <Button variant="btn btn-outline-primary">Learn More</Button>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 mb-4 grid-margin">
                <div className="card h-100">
                    <h4 className="card-header">Card Title</h4>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                    </div>
                    <div className="card-footer">
                        <Button variant="btn btn-outline-primary">Learn More</Button>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 mb-4 grid-margin">
                <div className="card h-100">
                    <h4 className="card-header">Card Title</h4>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div className="card-footer">
                        <Button variant="btn btn-outline-primary">Learn More</Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default index;
