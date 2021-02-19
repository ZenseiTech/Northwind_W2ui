// widget configuration
var pstyle = 'border: 1px solid #dfdfdf; padding: 5px; font-size:11px;';
var pstyle2 = 'border: 1px solid #dfdfdf; padding: 5px;  text-align: center;';
var grid_style = 'font-size:16px;color:black';

var server_url = 'http://localhost:8080';

var config = {
    layout: {
        name: 'layout',
        padding: 0,
        panels: [
            { type: 'left', size: 250, resizable: true, style: pstyle, minSize: 120 },
            { type: 'main', minSize: 550, style: pstyle, overflow: 'hidden' }
        ]
    },
    sidebar: {
        name: 'sidebar',
        nodes: [
            {
                id: 'general', text: 'General', group: true, expanded: true, nodes: [
                    { id: 'customers_grid', text: 'Customers', img: 'icon-page' },
                    { id: 'orders_grid', text: 'Orders', img: 'icon-page' },
                ]
            }
        ],
        onClick: function (event) {
            switch (event.target) {
                case 'customers_grid':
                    w2ui.layout.content('main', w2ui.customers);
                    break;
                case 'orders_grid':
                    w2ui.layout.content('main', w2ui.orders);
                    break;
            }
        }
    },
    customers: {
        name: 'customers',
        url: server_url + '/customers',
        header: 'Customers',
        // style: grid_style,
        limit: 300,
        show: {
            header: true,
            toolbar: true,
            footer: true,
            toolbarSave: true,
            toolbarAdd: true
        },
        toolbar: {
            items: [
                { type: 'break' },
                { type: 'button', id: 'cancel', caption: 'Cancel', icon: 'w2ui-icon-cross' },
                { type: 'spacer' },
                { type: 'button', id: 'excel', caption: 'Excel', icon: 'w2ui-icon-plus' },
            ],
            onClick: function (target, data) {
                console.log("--- onClick: " + target);
                if (target === 'cancel') {
                    w2ui.customers.reload();
                } else if (target === 'excel') {
                    
                }
            }
        },
        multiSearch: true,
        searches: [
            
        ],
        columns: [
            { field: 'companyName', caption: 'Company Name', size: '160px', searchable: true, sortable: true, info: true },
            { field: 'contactName', caption: 'Contact Name', size: '140px', searchable: true, sortable: true },
            { field: 'address', caption: 'Address', size: '160px', searchable: true, sortable: true },
            { field: 'city', caption: 'City', size: '110px', searchable: true, sortable: true },
            { field: 'contactTitle', caption: 'Contact Title', size: '120px', searchable: true, sortable: true },
            { field: 'country', caption: 'Country', size: '130px', searchable: true, sortable: true },
            { field: 'fax', caption: 'Fax', size: '150px', searchable: true, sortable: true },
            { field: 'phone', caption: 'Phone', size: '150px', searchable: true, sortable: true },
            { field: 'postalCode', caption: 'Postal Code', size: '150px', searchable: true, sortable: true },
            { field: 'region', caption: 'Region', size: '150px', searchable: true, sortable: true }
        ],
        onAdd: function (event) {
            
        },
        onRequest: function (event) {
            console.log('-- server call --');
            console.log(event);
        },
        onSave: function (event) {
            event.onComplete = function () {
                if (event.status === "success") {
                    console.log('---On save onComplete: ' + event.status);
                    
                }
            }
        },
        onChange: function (event) {
            console.log(event);
            
        },
        onDblClick: function (event) {
            console.log('Column is: ' + event.column + ' and recid is: ' + event.recid);
            if(event.column === 0) {
                
            }
        },
        onKeydown: function (event) {
            
        }
    },
    orders: {
        name: 'orders',
        url: server_url + '/orders',
        header: 'Orders',
        // style: grid_style,
        limit: 500,
        show: {
            header: true,
            toolbar: true,
            footer: true,
            toolbarSave: true,
            toolbarAdd: true
        },
        toolbar: {
            items: [
                { type: 'break' },
                { type: 'button', id: 'cancel', caption: 'Cancel', icon: 'w2ui-icon-cross' },
                { type: 'spacer' },
                { type: 'button', id: 'excel', caption: 'Excel', icon: 'w2ui-icon-plus' },
            ],
            onClick: function (target, data) {
                console.log("--- onClick: " + target);
                if (target === 'cancel') {
                    w2ui.customers.reload();
                } else if (target === 'excel') {
                    
                }
            }
        },
        multiSearch: true,
        searches: [
            { field: 'orderDate', caption: 'Order Date', type: 'date' },
            { field: 'requiredDate', caption: 'Required Date', type: 'date' },
            { field: 'shippedDate', caption: 'Shipped Date', type: 'date' },
            { field: 'freight', caption: 'Freight', type: 'money' },
        ],
        columns: [
            { field: 'customerCompanyName', caption: 'Customer Name', size: '160px', searchable: true, sortable: true, info: true },
            { field: 'customerId', caption: 'Customer Id', size: '140px', searchable: true, sortable: true },
            { field: 'employeeFullName', caption: 'Employee Name', size: '160px', searchable: true, sortable: true },
            { field: 'freight', caption: 'Freight', size: '110px', searchable: true, sortable: true, render: 'money' },
            { field: 'orderDate', caption: 'Order Date', size: '120px', searchable: true, sortable: true },
            { field: 'requiredDate', caption: 'Required Date', size: '130px', searchable: true, sortable: true },
            { field: 'shippedDate', caption: 'Ship Date', size: '150px', searchable: true, sortable: true },
            { field: 'shippedAddress', caption: 'Shipped Address', size: '150px', searchable: true, sortable: true },
            { field: 'shipCity', caption: 'Ship City', size: '150px', searchable: true, sortable: true },
            { field: 'shipCountry', caption: 'Ship Country', size: '150px', searchable: true, sortable: true },
            { field: 'shipName', caption: 'Ship Name', size: '150px', searchable: true, sortable: true },
            { field: 'shipPostalCode', caption: 'Ship Postal Code', size: '150px', searchable: true, sortable: true },
            { field: 'shipRegion', caption: 'Ship Region', size: '150px', searchable: true, sortable: true },
            { field: 'shipperCompanyName', caption: 'Shipper Name', size: '150px', searchable: true, sortable: true }
        ],
        onAdd: function (event) {
            
        },
        onRequest: function (event) {
            console.log('-- server call --');
            console.log(event);
        },
        onSave: function (event) {
            event.onComplete = function () {
                if (event.status === "success") {
                    console.log('---On save onComplete: ' + event.status);
                    
                }
            }
        },
        onChange: function (event) {
            console.log(event);
            
        },
        onDblClick: function (event) {
            console.log('Column is: ' + event.column + ' and recid is: ' + event.recid);
            if(event.column === 0) {
                
            }
        },
        onKeydown: function (event) {
            
        }
    },
};

$(function () {
    
    // initialization
    // w2utils.settings.dataType = 'HTTP';
    // w2utils.settings.dateFormat = 'yyyy-mm-dd';
    $('#main').w2layout(config.layout);
    w2ui.layout.content('left', $().w2sidebar(config.sidebar));

    // in memory initialization
    $().w2grid(config.customers);
    $().w2grid(config.orders);
});


