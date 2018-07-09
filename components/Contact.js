var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
    render: function() {
      return (
        <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://icons.veryicon.com/png/Emoticon/Yolks/Have%20a%20nice%20day.png'}/>
        <p className={'contactLabel'}>
            First Name: {this.props.item.firstName}</p>
        <p className={'contactLabel'}>
            Last Name: {this.props.item.lastName}</p>
        <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
            Email: {this.props.item.email}</a>
        </div>
      );
    }
  });