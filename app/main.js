// widget configuration
var pstyle = 'border: 1px solid #dfdfdf; padding: 5px; font-size:11px;';
var pstyle2 = 'border: 1px solid #dfdfdf; padding: 5px;  text-align: center;';
var grid_style = 'font-size:16px;color:black';

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
                ]
            }
        ],
        onClick: function (event) {
            switch (event.target) {
                case 'customers':
                    w2ui.layout.content('main', w2ui.customers);
                    break;
            }
        }
    },
    customers: {
        name: 'customers',
        url: '/customers',
        header: 'Customers',
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
            { field: 'itemSku', caption: 'Item Sku', type: 'text' },
            { field: 'description', caption: 'Description', type: 'text' },
            { field: 'active', caption: 'Active', type: 'list', options: { items: ['Y', 'N'] } },
            { field: 'sellByBottle', caption: 'Sell By Bottle', type: 'list', options: { items: ['Y', 'N'] } },
            { field: 'maxUnitPerOrder', caption: 'Max Unit Per Order', type: 'int' },
            { field: 'effectiveDT', caption: 'Effective DT', type: 'date' },
            { field: 'lastUpdateDT', caption: 'Last Update DT', type: 'date' }
        ],
        columns: [
            { field: 'itemSku', caption: '^ Item Sku', size: '150px', searchable: true, sortable: true, info: true },
            { field: 'description', caption: 'Description', size: '210px', searchable: true, sortable: true },
            { field: 'effectiveDT', caption: '(+) Effective DT', size: '150px', searchable: true, sortable: true, style: 'text-align: right', editable: { type: 'date' } },
            { field: 'active', caption: '(+) Active', size: '80px', searchable: true, sortable: true, editable: { type: 'checkbox', style: 'text-align: center' } },
            { field: 'sellByBottle', caption: '(+) Sell By Bottle', size: '120px', searchable: true, sortable: true, editable: { type: 'checkbox', style: 'text-align: center' } },
            { field: 'maxUnitPerOrder', caption: '(+) Max Unit Per Order', size: '130px', searchable: true, sortable: true, editable: { type: 'int' } },
            { field: 'comments', caption: '(+) Comments', size: '150px', searchable: true, sortable: true, editable: { type: 'text' } },
            { field: 'lastUpdateBy', caption: 'Last Update By', size: '150px', searchable: true, sortable: true },
            { field: 'lastUpdateDT', caption: 'Last Update DT', size: '150px', searchable: true, sortable: true }
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
});


