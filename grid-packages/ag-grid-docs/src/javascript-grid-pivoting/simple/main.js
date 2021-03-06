var gridOptions = {
    columnDefs: [
        { field: "country", rowGroup: true, enableRowGroup: true },
        { field: "year", pivot: true, enablePivot: true },
        { field: "date" },
        { field: "sport" },
        { field: "gold", aggFunc: 'sum' },
        { field: "silver", aggFunc: 'sum' },
        { field: "bronze", aggFunc: 'sum' }
    ],
    defaultColDef: {
        flex: 1,
        minWidth: 150,
        sortable: true,
        resizable: true
    },
    autoGroupColumnDef: {
        minWidth: 250,
    },
    // set rowData to null or undefined to show loading panel by default
    pivotMode: true,
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({ url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json' })
        .then(function(data) {
            gridOptions.api.setRowData(data);
        });
});
