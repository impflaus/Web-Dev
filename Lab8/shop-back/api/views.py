from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = list(Product.objects.all().values(
        'id', 'name', 'price', 'description', 'count', 'is_active', 'category_id'
    ))
    return JsonResponse(products, safe=False, json_dumps_params={'ensure_ascii': False})

def product_detail(request, id):
    product = Product.objects.filter(id=id).values(
        'id', 'name', 'price', 'description', 'count', 'is_active', 'category_id'
    ).first()
    if not product:
        return JsonResponse({'error': 'Not found'}, status=404)
    return JsonResponse(product, json_dumps_params={'ensure_ascii': False})

def category_list(request):
    categories = list(Category.objects.all().values('id', 'name'))
    return JsonResponse(categories, safe=False, json_dumps_params={'ensure_ascii': False})

def category_detail(request, id):
    category = Category.objects.filter(id=id).values('id', 'name').first()
    if not category:
        return JsonResponse({'error': 'Not found'}, status=404)
    return JsonResponse(category, json_dumps_params={'ensure_ascii': False})

def category_products(request, id):
    products = list(Product.objects.filter(category_id=id).values(
        'id', 'name', 'price', 'description', 'count', 'is_active', 'category_id'
    ))
    return JsonResponse(products, safe=False, json_dumps_params={'ensure_ascii': False})
