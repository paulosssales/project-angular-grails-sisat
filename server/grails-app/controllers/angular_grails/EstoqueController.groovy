package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class EstoqueController {

    EstoqueService estoqueService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond estoqueService.list(params), model:[estoqueCount: estoqueService.count()]
    }

    def show(Long id) {
        respond estoqueService.get(id)
    }

    def save(Estoque estoque) {
        if (estoque == null) {
            render status: NOT_FOUND
            return
        }

        try {
            estoqueService.save(estoque)
        } catch (ValidationException e) {
            respond estoque.errors, view:'create'
            return
        }

        respond estoque, [status: CREATED, view:"show"]
    }

    def update(Estoque estoque) {
        if (estoque == null) {
            render status: NOT_FOUND
            return
        }

        try {
            estoqueService.save(estoque)
        } catch (ValidationException e) {
            respond estoque.errors, view:'edit'
            return
        }

        respond estoque, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        estoqueService.delete(id)

        render status: NO_CONTENT
    }
}
