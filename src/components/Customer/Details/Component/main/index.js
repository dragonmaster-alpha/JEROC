import React from "react";
import { Link } from 'react-router-dom';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import ActivityLog from './main_activity_log';
import styled from "styled-components";
import ActivityNote from "./main_activity_note";
import CustomerContactPersons from "./main_contact_persons";
import CustomerVisitingAddress from "./main_contact_visiting_address";

const StyledContainer = styled.div`
  .main_field{
    background-color: white;
    padding: 25px;
    padding-top: 50px;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    font-weight: bold;
    .slider_field{
      align-items: center;
    }
    .second_field{
      color: lightgray;
    }
    .row{
      .row{
        margin-bottom: 10px;
      }
    }
  }
  .other_field{
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

class CustomerDetailsMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slider : 500
    };
  }
  componentDidMount(){
  }

  componentDidUpdate(prevProps){
  }

  render() {
    return (
      <StyledContainer>
        <div className="main_field">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">Kundnummer</div>
                <div className="col-md-6">28945</div>
              </div>
              <div className="row">
                <div className="col-md-6">Namn</div>
                <div className="col-md-6">Nicklas Juhlin Rosen</div>
              </div>
              <div className="row">
                <div className="col-md-6">Person / Org.nr</div>
                <div className="col-md-6">19930423-6874</div>
              </div>
              <div className="row">
                <div className="col-md-6">Kund sedan</div>
                <div className="col-md-6">16 maj 2015 (4 ar 10d)</div>
              </div>
              <div className="row">
                <div className="col-md-6">Typ av kund</div>
                <div className="col-md-6">Privatkund</div>
              </div>
              <div className="row">
                <div className="col-md-6">Emblem</div>
                <div className="col-md-6">Stammis, trevlig, guldkund</div>
              </div>
              <div className="row">
                <div className="col-md-6">Sprak</div>
                <div className="col-md-6">Svenska</div>
              </div>
              <div className="row">
                <div className="col-md-6">Kreditgrans</div>
                <div className="col-md-6">Standard</div>
              </div>
            </div>
            <div className="col-md-4 second_field">
              <div className="row">
                <div className="col-md-6">Senaste Aktivitet</div>
                <div className="col-md-6">2019-03-29 (00a 02m 23d)</div>
              </div>
              <div className="row">
                <div className="col-md-6">Antal Bestallningar</div>
                <div className="col-md-6">7 st</div>
              </div>
              <div className="row">
                <div className="col-md-6">Antal timmar nedlagda</div>
                <div className="col-md-6">142 tim</div>
              </div>
              <div className="row">
                <div className="col-md-6">Forfallna kundfakturor(0 st)</div>
                <div className="col-md-6">0,00 kr</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="row slider_field">
                <div className="col-md-3">Kreditstatus</div>
                <div className="col-md-6">
                  <Slider
                    min={300}
                    max={850}
                    value={this.state.slider}
                    labels={{
                      300: '300',
                      580: '580',
                      640: '640',
                      700: '700',
                      750: '750',
                      850: '850'
                    }}
                    onChange={(value) => {this.setState({...this.state, slider: value})}}
                  />
                </div>
                <div className="col-md-2">
                  <div className="btn btn-primary">Uppdatera</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="other_field">
          <div className="row">
            <div className="col-md-6">
              <ActivityLog />
              <ActivityNote />
            </div>
            <div className="col-md-6">
              <CustomerContactPersons />
              <CustomerVisitingAddress />
            </div>
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default CustomerDetailsMain;