package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class ModeloController {

    ModeloService modeloService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond modeloService.list(params), model:[modeloCount: modeloService.count()]
    }

    def show(Long id) {
        respond modeloService.get(id)
    }

    def save(Modelo modelo) {
        if (modelo == null) {
            render status: NOT_FOUND
            return
        }

        try {
            modeloService.save(modelo)
        } catch (ValidationException e) {
            respond modelo.errors, view:'create'
            return
        }

        respond modelo, [status: CREATED, view:"show"]
    }

    def update(Modelo modelo) {
        if (modelo == null) {
            render status: NOT_FOUND
            return
        }

        try {
            modeloService.save(modelo)
        } catch (ValidationException e) {
            respond modelo.errors, view:'edit'
            return
        }

        respond modelo, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        modeloService.delete(id)

        render status: NO_CONTENT
    }
}
