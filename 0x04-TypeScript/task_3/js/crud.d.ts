import {RowID, RowElement} from "./interface";
import * as CRUD from "./crud.js" ;


row: RowElement = {
    firstName: Guillaume,
    lastName: Salva
}

const newRowID: RowID = CRUD.insertRow()

const updatedRow: RowElement;
row.age = 23;

CRUD.updatedRow();
CRUD.deleteRow();
