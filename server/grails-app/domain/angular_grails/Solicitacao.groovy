package angular_grails

class Solicitacao {

    Integer quantidade
    Date data_inicial

    Solicitante solicitante
    Administrador administrador

    static hasMany = [tonerSolicitados: TonerDespacho]

    static constraints = {
        quantidade min: 0
        solicitante nullable: false
        administrador nullable: false
    }

    static mapping = {
        table name: "tab_solicitacoes"
        id column: "solicitacao_id"
        solicitante column: "id_solicitante"
        administrador column: "id_administrador"
    }
    
}
