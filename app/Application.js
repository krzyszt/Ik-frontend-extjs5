/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Ik.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Ik',

    views: [
        'Ik.view.main.MainTab',
        'Ik.view.main.MainHeader',
        'Ik.view.main.MainSidebar',
        'Ik.view.main.Dashboard',
        'Ik.view.toolbar.MainToolbar',
        'Ik.view.grid.CustomerGrid',
        'Ik.view.form.CustomerForm',
        'Ik.view.grid.SupplierGrid',
        'Ik.view.form.SupplierForm',
        'Ik.view.grid.LeadGrid',
        'Ik.view.form.LeadForm',
        'Ik.view.grid.ContactGrid',
        'Ik.view.form.ContactForm',
        'Ik.view.grid.UserGrid',
        'Ik.view.form.UserForm',
    ],

    controllers: [
        'Root'
    ],

    stores: [
        'Ik.store.Partner',
        'Ik.store.Customer',
        'Ik.store.Supplier',
        'Ik.store.Lead',
        'Ik.store.Contact',
        'Ik.store.User'
    ],
    defaultToken : 'home',
    
    launch: function () {
        // TODO - Launch the application
    }
});
