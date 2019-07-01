package angular_grails

class Estoque {

    Integer quantidade
    Integer quantidadeMinima
    Modelo modelo 

    static belongsTo = [ Modelo ]

    static constraints = {
        quantidade min: 0
        quantidadeMinima min: 0
        modelo nullable: false
    }

    static mapping = {
        table name: "tab_estoques"
        id column: "estoque_id"
        modelo column: "id_modelo"
    }
}
