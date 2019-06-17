package angular_grails

class Marca {

    String nome

    static hasMany = [modelos: Modelo]

    static constraints = {
        nome nullable: false, unique: true
    }

    static mapping = {
        discriminator column: "tipo", value: "GERAL"
        table name: "tab_marcas"
        id column: "marca_id"
    }

}
