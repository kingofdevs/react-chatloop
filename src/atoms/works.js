import React from 'react';

export function WorkAtom(props) {
    const { i, onClick } = props;
    return (
        <div className="item">
            <div className="team-box">
                <div className="team-under-box">
                    <div className="team-under-box-button text-white" onClick={onClick}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <img className="img-fluid" src={`images/webs/${i}.jpg`} alt={`${i}`} />
                    <div className="team-overlay">
                        <div className="social-icon">
                            <ul>
                                <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                <li><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                                <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                                <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                <li><i className="fa fa-rss" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export function WorkHoverAtom(props) {
    return (
        <div className="col-md-12">
            <div className="team-hover">
                <div className="row">
                    <div className="col-md-4">
                        <div className="team-profile"><img className="img-fluid" src={`images/webs/${props.i}.jpg`} alt={`${props.i}`} /></div>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex-1">
                            <div className="hover-text">
                                <div className="team-close-btn">
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </div>
                                <h3>Mark Jecno </h3>
                                <h4 className="m-0 text-muted">Devloper & Designer </h4>
                                <h5>PHP, Laravel, Cake , _________, HTML5  </h5>
                                <p>It is a long ___________ fact that a reader ____ be distracted by the ________ content of a page ____ looking at its layout. ___ point of using Lorem _____ is that it has _ more-or-less normal distribution of _______, as opposed to using '_______ here, content here', making __ look like readable English. ____ desktop publishing packages and ___ page editors now use _____ Ipsum as their default _____ text, </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}