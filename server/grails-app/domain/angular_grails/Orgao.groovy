package angular_grails

class Orgao {

    String sigla
    String intitulada
    
    static hasMany = [
                        solicitantes: Solicitante,
                        impressoras: Impressora
                        ]

    static constraints = {
        sigla nullable: false, blank: false
        intitulada nullable: false, blank: false
    }

    static mapping = {
        table name: "tab_orgaos"
        id column: "orgao_id"
    }
}
