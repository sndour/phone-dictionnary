    import React, { Component } from 'react';


    export class TelephoneDictionnary extends React.Component {
        constructor(props) {
        super(props);
        this.state = { items: [], itemsSearch: [], name: '', firstname: '', phoneNumber: '', search: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
        this.search = this.search.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        render() {
        return (
            <div>
            <h3>TELEPHONE DICTIONNARY</h3>
                <br/>
                <input
                placeholder="Search by name or number"
                data-testid="new-search"
                onChange={this.search}
                value={this.state.search}
                />
                <br/>
                <br/>
                <br/>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-name">
                Name
                </label>
                <br/>
                <input
                data-testid="new-name"
                placeholder='enter name'
                onChange={this.handleChangeName}
                value={this.state.name}
                />
                <br/><br/>
                <label htmlFor="new-firstname">
                FirstName
                </label>
                <br/>
                <input
                data-testid="new-firstname"
                placeholder='enter firstname'
                onChange={this.handleChangeFirstName}
                value={this.state.firstname}
                />
                <br/>
                <br/>
                <label htmlFor="new-phone-number">
                PhoneNumber
                </label>
                <br/>
                <input
                data-testid="new-phone-number"
                placeholder="enter new phone number"
                type="number"
                onChange={this.handleChangePhoneNumber}
                value={this.state.phoneNumber}
                />
                <br/><br/>
                <button
                data-testid="create-contact">
                Create a contact
                </button>
            </form>
            {this.state.search.length === 0? <ContactList items= {this.state.items}/>:
            <ContactListSearch itemsSearch = {this.state.itemsSearch}/>}
            </div>
        );
        }
    
        handleChange(e) {
        this.setState({ text: e.target.value });
        }

        handleChangeFirstName(e) {
            console.log('firstname ',e.target.value);
            this.setState({ firstname: e.target.value });
        }

        handleChangeName(e) {
            this.setState({ name: e.target.value });
        }

        handleChangePhoneNumber(e) {
            this.setState({ phoneNumber: e.target.value });
        }

        search(e){
            console.log(e.target.value);
            const array = [...this.state.items];
            if(e.target.value.length !== 0){
                const nameSearched = e.target.value;
                const filteredData =  array.filter((contact) => {
                    return contact.name.toLowerCase().includes(nameSearched.toLowerCase())||contact.phoneNumber.toLowerCase().includes(nameSearched.toLowerCase())
                })
                this.setState({
                    search:e.target.value,
                    itemsSearch: filteredData
                })
                console.log('tableau attendu ', filteredData);
            } 
            if(e.target.value.length === 0){
                
                this.setState({
                    search: '',
                    itemSearch: []});
            }
        }

    
        handleSubmit(e) {
        e.preventDefault();
        if (this.state.name.length === 0 || this.state.firstname.length === 0 || this.state.phoneNumber.length === 0) {
            return false;
        }
        
        const newContact = {
            name: this.state.name,
            prenom: this.state.firstname,
            phoneNumber: this.state.phoneNumber,
            id: Date.now()
        };

        this.setState(state => ({
            items: state.items.concat(newContact),
            firstname: '',
            name: '',
            phoneNumber: ''
        }));
        }
    }
    
    class ContactList extends React.Component {
        render() {
        return (
            <div data-testid="contact-list">
            <ul>
            {this.props.items.map(item => (
                <li key={item.id}>
                    <div>
                        <div>Name: {item.name}</div><br/>
                        <div>Prenom: {item.prenom}</div><br/>
                        <div>contact: {item.phoneNumber}</div>
                        <div>----------------------------------------------</div>
                    </div>
                </li>
            ))}
            </ul>
            </div>
        );
        }
    }
    class ContactListSearch extends React.Component {
        render() {
        return (
            <div data-testid="contact-list-search">
            <ul>
            {this.props.itemsSearch.map(item => (
                <li key={item.id}>
                    <div>
                        <div>Name: {item.name}</div><br/>
                        <div>Prenom: {item.prenom}</div><br/>
                        <div>contact: {item.phoneNumber}</div>
                        <div>----------------------------------------------</div>
                    </div>
                </li>
            ))}
            </ul>
            </div>
        );
        }
    }
    
    export default TelephoneDictionnary;