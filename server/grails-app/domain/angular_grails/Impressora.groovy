package angular_grails

class Impressora extends Marca {

    String numeroSerial
    String setor
    String tombamento

    Orgao orgao

    static constraints = {
        numeroSerial nullable: false, blank:false
        setor nullable: false, blank:false
        tombamento nullable: false, blank:false
        orgao nullable: false
    }

    static mapping = {
        discriminator value: "IMPRESSORA"

        table name: "tab_impressoras"
        id column: "impressora_id"
        estoque column: "id_orgao"
    }
}
