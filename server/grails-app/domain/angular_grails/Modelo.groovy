package angular_grails

class Modelo {

    String nome
    Marca marca
    Estoque estoque

    static constraints = {
        nome nullable: false, blank: false, unique: true
        marca nullable: false
    }

    static mapping = {
        table name: "tab_modelos"
        id column: "modelo_id"
        marca column: "id_marca"
        estoque column: "id_estoque"
    }
}
