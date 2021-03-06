import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// Checkboxes
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import Triangle1 from '../images/shapes/Shape1.png'
import Triangle2 from '../images/shapes/Shape2.png'
// import Line1 from '../images/lines/Line1.png'
import Line2 from '../images/lines/Line2.png'

// import overview2 from './formtext/overview2.js'

export class Overview2 extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleSlideCheck, classes } = this.props;
        const myStyle = {
            container: {
                background: "#fdce16",
                width: "100%",
                height: "100%"
            },
            box: {
                //    background: "blue"

            },


            image1: {

                top: 0,
                left: 0,

            },
            image2: {

                top: 30,
                left: 30,

            }
        }
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className='ov1' style={myStyle.container}>
                        <div className="ov1-SubCategory" style={myStyle.box}>
                            <h2>FIRST UP, LET’S DETERMINE THE COMPONENTS OF YOUR OFFER</h2>
                            <img src={Line2} alt="Shape 1" />
                            {/* Checkboxes add slides to queue */}
                            <li>(Non optional) Direct Compensation (hourly or salaried wages)</li>

                            <FormGroup className={classes.root}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={values.annual_bonus_slide}
                                            onChange={handleSlideCheck('annual_bonus_slide')}
                                            // value='/annual_bonus'
                                            color="primary"
                                        />
                                    } label="Annual Bonus"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={values.equity_or_stock_slide}
                                            onChange={handleSlideCheck('equity_or_stock_slide')}
                                            // value='/equity_or_stock'
                                            color="primary"
                                        />
                                    } label="Equity or Stock"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={values.benefits_slide}
                                            onChange={handleSlideCheck('benefits_slide')}
                                            // value='/benefits'
                                            color="primary"
                                        />
                                    } label="Benefits"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={values.onboarding_pay_slide}
                                            onChange={handleSlideCheck('onboarding_pay_slide')}
                                            // value='/onboarding_pay'
                                            color="primary"
                                        />
                                    } label="Relocation/Onboarding Payment"
                                />
                            </FormGroup >

                            <br />
                            <RaisedButton
                                label="Back"
                                primary={false}
                                style={styles.button}
                                onClick={this.back}
                            />
                            <RaisedButton
                                label="Continue"
                                primary={true}
                                style={styles.button}
                                onClick={this.continue}
                            />
                        </div> {/* BOX 1*/}
                        <div className="ov1-SubCategory" style={myStyle.box}>
                            {/* <div style= {image1}> */}
                            <img style={myStyle.image1} src={Triangle1} alt="Shape 1" />
                            <img style={myStyle.image2} src={Triangle2} alt="Shape 2" />
                            {/* </div> */}
                        </div> {/*BOX 2*/}
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },

    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: "center",
        alignContent: "center"

    },

    // row: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    // },
}

export default withStyles(styles)(Overview2)