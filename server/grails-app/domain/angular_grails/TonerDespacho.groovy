package angular_grails

class TonerDespacho {

    Date data_saida
    Integer quantidade
    String observacao

    Toner toner
    Solicitacao solicitacao

    static belongsTo = [Solicitacao]

    static constraints = {
        data_saida max: new Date()
        quantidade min: 0
        observacao nullable: true, blank:true
    }

    static mapping = {
        table name: "tab_tonersDespachados"
        id column: "tonerDespachado_id"
        toner column: "id_toner"
        solicitacao column: "id_solicitacao"
    }
}
