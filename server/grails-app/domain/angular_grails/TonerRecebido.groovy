package angular_grails

class TonerRecebido {

    Integer quantidade
    Date data_entrada

    Toner toner

    static mapping = {
        table name: "tab_tonersRecebidos"
        id column: "tonerRecebido_id"
        toner column: "id_toner"
    }

    static constraints = {
        quantidade min:0
        data_entrada max: new Date()
    }
}
