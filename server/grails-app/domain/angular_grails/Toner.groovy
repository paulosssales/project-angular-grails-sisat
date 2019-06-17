package angular_grails

class Toner extends Marca {

    String numeroSerial
    String lote
    Estoque estoque

    static hasMany = [tonerSolicitados: TonerDespacho]

    static constraints = {
        numeroSerial nullable: false, blank: false, size: 5..20
        lote nullable: false, blank: false, size: 4..20
    }

    static mapping = {
        
        discriminator value: "TONER"
        table name: "tab_toners"
        id column: "toner_id"
        estoque column: "id_estoque"

    }

}
