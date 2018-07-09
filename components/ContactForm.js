var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <form className={'contactForm'}>
                    <input 
                        type={'text'}
                        placeholder={'First Name'}
                        autoComplete={'given-name'}
                        value={this.props.contact.firstName}
                    />
                    <input 
                        type='text'
                        placeholder={'Last Name'}
                        autoComplete={'family-name'}
                        value={this.props.contact.lastName}
                    />
                    <input 
                        type={'email'}
                        placeholder={'Email'}
                        autoComplete={'email'}
                        value={this.props.contact.email}
                    />
                    <button type={'submit'}>Add contact</button>
                </form>
        );
    }
});