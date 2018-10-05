import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";

class Home extends React.Component {
    componentDidMount() {
        this.props.requestApiData();
    }

    image = (x, i) =>
  
    <div key={x.id}>
        <a className="list-block" href="#">
            <figure>
                <img src={x.url} alt={x.title} />
                <figcaption>
                    <h2>{x.title}</h2>
                    
                </figcaption>
            </figure>
        </a>
        </div>
       
    render() {
        const results = this.props.data;

        return results.length
        
            ? <div className="grid-wrap">
          <div key={results.id}>
                
                <a className="list-block" href="#">
                    <figure>
                        <img src={results.url} alt={results.title} />
                        <figcaption>
                            <h2>{results.title}</h2>
                        </figcaption>
                    </figure>
                </a>
                </div>
            </div>
            : <h1>loading...</h1>;

    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);