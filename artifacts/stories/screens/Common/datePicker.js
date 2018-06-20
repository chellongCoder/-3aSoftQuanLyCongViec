import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { Icon } from 'native-base';
import styles from './../AddNew/styles';
import commonColor from './../../../theme/variables/commonColor';
export default class datepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        };
    }
    render() {
        return (React.createElement(DatePicker, { style: { width: 200, position: 'absolute', left: 10 }, date: this.props.date != undefined ? this.props.date.replace(/-/g, '/') : (this.state.date != "" ? this.state.date : ""), mode: "date", placeholder: "DD/MM/YYYY", format: "DD/MM/YYYY", minDate: new Date(), maxDate: "31/12/2018", confirmBtnText: "Confirm", cancelBtnText: "Cancel", iconComponent: React.createElement(Icon, { style: { color: styles.color.buttonLogin, position: "absolute", left: 0 }, ios: 'ios-calendar-outline', android: 'md-calendar' }), customStyles: {
                dateText: {
                    color: commonColor.cardBorderColor,
                    fontStyle: 'italic',
                },
                dateInput: {
                    marginLeft: 36,
                    borderWidth: 0
                }
                // ... You can check the source to find the other keys.
            }, onDateChange: (date) => {
                console.log(date);
                this.setState({ date: date });
                this.props.onDateChange(date);
            } }));
    }
}
//# sourceMappingURL=datePicker.js.map