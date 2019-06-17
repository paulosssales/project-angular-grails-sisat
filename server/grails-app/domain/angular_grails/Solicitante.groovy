package angular_grails

class Solicitante {

    String matricula
    String nome
    String telefone
    String email

    static hasMany = [tonerSolicitados: TonerDespacho]

    static constraints = {
        matricula nullable: false, blank: false
        nome nullable: false, blank: false
        telefone nullable:false, blank:false
        email email:true, unique: true
    }

    static mapping = {
        table name: "tab_solicitantes"
        id column: "solicitante_id"
    }

}
