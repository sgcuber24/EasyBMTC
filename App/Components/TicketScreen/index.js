import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Alert, StatusBar, TouchableOpacity } from 'react-native';
import styles from './style.js';
import ModalSelector from 'react-native-modal-selector';
import CardView from 'react-native-cardview';
import NumericInput from 'react-native-numeric-input';
import LinearGradient from 'react-native-linear-gradient';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ticketNo: this.props.navigation.state.params.responseJson.data.ticket.id,
			date: this.props.navigation.state.params.responseJson.data.ticket.date,
			time: '',
			busNo: this.props.navigation.state.params.responseJson.data.ticket.busNo,
			from: this.props.navigation.state.params.responseJson.data.ticket.from,
			to: this.props.navigation.state.params.responseJson.data.ticket.to,
			numberAdults: this.props.navigation.state.params.responseJson.data.ticket.numberAdults,
			numberChildren: this.props.navigation.state.params.responseJson.data.ticket.numberChildren,
			numberSC: this.props.navigation.state.params.responseJson.data.ticket.numberSC,
			fare: this.props.navigation.state.params.responseJson.data.ticket.fare,
			txnId: this.props.navigation.state.params.responseJson.data.ticket.txnId
		};
	}

	componentDidMount() {
		StatusBar.setBarStyle('light-content', true);
		StatusBar.setBackgroundColor('#50c96a');
		var that = this;
		var date = new Date().getDate(); //Current Date
		var month = new Date().getMonth() + 1; //Current Month
		var year = new Date().getFullYear(); //Current Year
		var hours = new Date().getHours(); //Current Hours
		var min = new Date().getMinutes(); //Current Minutes
		var sec = new Date().getSeconds(); //Current Seconds
		that.setState({
			//Setting the value of the date time
			date: date + '.' + month + '.' + year,
			time: hours + ':' + min + ':' + sec
		});
	}
	render() {
		console.log(this.state);
		if (this.state.isLoading === true) {
			return (
				<View style={styles.body}>
					<ActivityIndicator color="#50c96a" size="large" style={styles.activityIndicator} />
				</View>
			);
		}
		return (
			<View style={styles.body}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>Ticket Details</Text>
				</View>
				<View style={styles.bodyContainer}>
					<View style={styles.ticketBusNo}>
						<Text style={styles.ticketNumber}>T. No: {this.state.ticketNo}</Text>
						<Text style={styles.busNo}>{this.state.busNo}</Text>
					</View>
					<View style={styles.ticketBusNo}>
						<Text style={styles.ticketNumber}>{this.state.date}</Text>
						<Text style={styles.busNo}>{this.state.time}</Text>
					</View>
					<CardView cardElevation={4} cardMaxElevation={7} cornerRadius={7} style={styles.card}>
						<View style={styles.pickerBox}>
							<Text style={{ color: '#bababa', alignSelf: 'center' }}>From</Text>
							<Text style={{ color: '#575757', fontSize: 16, alignSelf: 'center', marginTop: 5 }}>
								{this.state.from}
							</Text>
						</View>

						<View style={styles.pickerBox}>
							<Text style={{ color: '#bababa', alignSelf: 'center' }}>To</Text>
							<Text style={{ color: '#575757', fontSize: 16, alignSelf: 'center', marginTop: 5 }}>
								{this.state.to}
							</Text>
						</View>
					</CardView>
					<CardView cardElevation={4} cardMaxElevation={7} cornerRadius={7} style={styles.card}>
						<View style={styles.ticketBox}>
							<Text style={{ color: '#bababa', alignSelf: 'flex-start' }}>Group</Text>
							<Text style={{ color: '#bababa', alignSelf: 'flex-end', marginLeft: 'auto' }}>
								Number of Tickets
							</Text>
						</View>
						<View style={styles.ticketBox}>
							<Text style={styles.ticket}>Adults</Text>
							<Text style={styles.ticketRight}>{this.state.numberAdults}</Text>
						</View>
						<View
							style={{
								borderBottomColor: '#cacaca',
								borderBottomWidth: 1
							}}
						/>
						<View style={styles.ticketBox}>
							<Text style={styles.ticket}>Children</Text>
							<Text style={styles.ticketRight}>{this.state.numberChildren}</Text>
						</View>
						<View
							style={{
								borderBottomColor: '#cacaca',
								borderBottomWidth: 1
							}}
						/>
						<View style={styles.ticketBox}>
							<Text style={styles.ticket}>Senior Citizens</Text>
							<Text style={styles.ticketRight}>{this.state.numberSC}</Text>
						</View>
						<View
							style={{
								borderBottomColor: '#cacaca',
								borderBottomWidth: 1
							}}
						/>
						<View style={styles.ticketBox}>
							<Text style={styles.ticket}>Total Fare</Text>
							<Text style={styles.fareRight}>
								{'\u20B9'}
								{this.state.fare}
							</Text>
						</View>
					</CardView>
				</View>
				<View style={styles.footerContainer}>
					<LinearGradient
						colors={[ '#50c96a', '#77e98f' ]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={styles.payButton}
					>
						<TouchableOpacity>
							<Text style={styles.payText}>Save as PDF</Text>
						</TouchableOpacity>
					</LinearGradient>
				</View>
			</View>
		);
	}
}
