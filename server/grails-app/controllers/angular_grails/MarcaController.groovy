package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class MarcaController {

    MarcaService marcaService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond marcaService.list(params), model:[marcaCount: marcaService.count()]
    }

    def show(Long id) {
        respond marcaService.get(id)
    }

    def save(Marca marca) {
        if (marca == null) {
            render status: NOT_FOUND
            return
        }

        try {
            marcaService.save(marca)
        } catch (ValidationException e) {
            respond marca.errors, view:'create'
            return
        }

        respond marca, [status: CREATED, view:"show"]
    }

    def update(Marca marca) {
        if (marca == null) {
            render status: NOT_FOUND
            return
        }

        try {
            marcaService.save(marca)
        } catch (ValidationException e) {
            respond marca.errors, view:'edit'
            return
        }

        respond marca, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        marcaService.delete(id)

        render status: NO_CONTENT
    }
}
