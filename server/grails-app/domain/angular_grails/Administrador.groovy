package angular_grails

class Administrador {

    String nome
    String usuario
    String senha

    static constraints = {
        nome nullable: false, blank:false
        usuario nullable: false, blank:false
        senha size: 8..15
    }

    static mapping = {
        table name: "tab_admins"
        id column: "admin_id"
    }
}
