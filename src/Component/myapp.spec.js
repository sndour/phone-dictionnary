import React, { Component } from 'react';
import {render, fireEvent} from '@testing-library/react'
import TelephoneDictionnary from './myApp'




describe('TelephoneDictionnary', ()=>{
  
        test("updates on change", ()=>{
            const {queryByPlaceholderText} = render(<TelephoneDictionnary />);
            const searchInput = queryByPlaceholderText("Search by name or number");
            fireEvent.change(searchInput, {target: {value: "test"}});
            expect(searchInput.value).toBe("test");
        });

        test("updates on change name", ()=>{
            const {queryByPlaceholderText} = render(<TelephoneDictionnary />);
            const nameInput = queryByPlaceholderText("enter name");
            fireEvent.change(nameInput, {target: {value: "test"}});
            expect(nameInput.value).toBe("test");
        });

        test("updates on change firstname", ()=>{
            const {queryByPlaceholderText} = render(<TelephoneDictionnary />);
            const firstnameInput = queryByPlaceholderText("enter firstname");
            fireEvent.change(firstnameInput, {target: {value: "test"}});
            expect(firstnameInput.value).toBe("test");
        });

        test("updates on change phone number", ()=>{
            const {queryByPlaceholderText} = render(<TelephoneDictionnary />);
            const phoneNumberInput = queryByPlaceholderText("enter new phone number");
            fireEvent.change(phoneNumberInput, {target: {value: "0912345678"}});
            expect(phoneNumberInput.value).toBe("0912345678");
        });
        
    test("create contact", ()=>{
        const {queryByPlaceholderText, queryByTestId} = render(<TelephoneDictionnary />);
        const phoneNumberInput = queryByPlaceholderText("enter new phone number");
        const nameInput = queryByPlaceholderText("enter name");
        const firstNameInput = queryByPlaceholderText("enter firstname");
        const button = queryByTestId('create-contact');
        fireEvent.change(phoneNumberInput, {target: {value: "0912345678"}});
        fireEvent.change(nameInput, {target: {value: "NDOUR"}});
        fireEvent.change(firstNameInput, {target: {value: "Stephane"}});
        fireEvent.click(queryByTestId('create-contact'));
        expect(button).toBeTruthy();
        expect(nameInput.value).toBe("");
        expect(firstNameInput.value).toBe("");
        expect(phoneNumberInput.value).toBe("");
    });

    test("search contact", ()=>{
        const {queryByPlaceholderText, queryByTestId} = render(<TelephoneDictionnary />);
        const phoneNumberInput = queryByPlaceholderText("enter new phone number");
        const nameInput = queryByPlaceholderText("enter name");
        const firstNameInput = queryByPlaceholderText("enter firstname");
        const button = queryByTestId('create-contact');
        fireEvent.change(phoneNumberInput, {target: {value: "0912345666"}});
        fireEvent.change(nameInput, {target: {value: "NDOURENe"}});
        fireEvent.change(firstNameInput, {target: {value: "Stephanion"}});
        fireEvent.click(button);
        expect(queryByTestId("contact-list")).toBeTruthy();
        expect(nameInput.value).toBe("");
        expect(firstNameInput.value).toBe("");
        expect(phoneNumberInput.value).toBe("");
        const searchInput = queryByPlaceholderText("Search by name or number");
        fireEvent.change(searchInput, {target: {value: "091234"}});
        expect(queryByTestId("contact-list-search")).toBeTruthy();
    });
});