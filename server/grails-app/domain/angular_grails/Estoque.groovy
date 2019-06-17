package angular_grails

class Estoque {

    Integer quantidade
    Integer quantidadeMinima
    Toner toner 

    static belongsTo = [ Toner ]

    static constraints = {
        quantidade min: 0
        quantidadeMinima min: 0
        toner nullable: false
    }

    static mapping = {
        table name: "tab_estoques"
        id column: "estoque_id"
        toner column: "id_toner"
    }
}
