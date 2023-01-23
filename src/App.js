import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import Header from './components/Header/Header';
import GenerateReport from './components/GenerateReport/GenerateReport';
import PreviousReports from './components/PreviousReports/PreviousReports';
import ReportPdf from './components/ReportPdf/ReportPdf';
import SignIn from './components/SignIn/SignIn';
import {connect} from 'react-redux'
import TharbProjectGR from './components/TharbProject/TharbProjectGR';
import Reportproject from './components/ReportPdf/Reportproject';
import PreviousReportsProject from './components/PreviousReports/PreviousReportsProject'
import SignUp from './components/SignIn/SignUp';
import OldUploads from './components/OldUploads';

function App(props) {
  return (
    props.user.user?
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/generatereport" component={GenerateReport} />
      <Route path="/previousreports" component={PreviousReports} />
      <Route path="/previousreportsproject" component={PreviousReportsProject} />
      <Route path="/reportpdf" component={ReportPdf} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/tharbprojectgr" component={TharbProjectGR} />
      <Route path="/reportproject" component={Reportproject} />
      <Route path="/olduploads" component={OldUploads} />
    </Switch>:
    <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    </Switch>
  );
}

const mapStateToProps = ({EventUser})=>{
  return {
    user:EventUser
  }
}

export default connect(mapStateToProps)(App);
