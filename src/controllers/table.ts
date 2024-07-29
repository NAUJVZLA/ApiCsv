import { DataTable } from "../models/models.js";

export async function renderTable(arrayTable: DataTable, currentPage: number, recordsPerPage: number): Promise<string> {
    /*indices declarando las constantes */
    const startIndex = (currentPage - 1) * recordsPerPage;
    const finalIndex = startIndex + recordsPerPage;
    const paginatedData = arrayTable.slice(startIndex, finalIndex)
    /*nombres de columnas de la primera fila si están disponibles */
    const columNames = arrayTable.length > 0 ? Object.keys(arrayTable[0]) : [];
    //pedimos que nos retorne esta informacion en esta estructura
    return `
    <table class = "table table-stripped"
    <thead>
        ${columNames.map(value => `
            <th scope="col" id="titulo">${value}`).join('')}</th>
    </thead>
    <tbody>
    ${paginatedData.map(row => `
        <tr>
        ${columNames.map(columnName => `
        <td>
        ${row[columnName] || ``}
        </td>`).join('')}
        </tr>`).join('')}
    </tbody>
    </table>`
}