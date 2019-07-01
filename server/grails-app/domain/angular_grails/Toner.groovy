package angular_grails

class Toner {

    String numeroSerial
    String lote
    Marca marca

    static hasMany = [tonerSolicitados: TonerDespacho]

    static constraints = {
        numeroSerial nullable: false, blank: false, size: 5..20
        lote nullable: false, blank: false, size: 4..20
    }

    static mapping = {
        
        discriminator value: "TONER"
        table name: "tab_toners"
        id column: "toner_id"

    }

}
