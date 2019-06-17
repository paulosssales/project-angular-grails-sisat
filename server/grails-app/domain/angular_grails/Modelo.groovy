package angular_grails

class Modelo {

    String nome
    Marca marca

    static constraints = {
        nome nullable: false, blank: false
        marca nullable: false
    }

    static mapping = {
        table name: "tab_modelos"
        id column: "modelo_id"
        marca column: "id_marca"
    }
}
