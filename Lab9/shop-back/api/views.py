from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        products = Product.objects.filter(category_id=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    @action(detail=False, methods=['post'], url_path='buy')
      def buy(self, request):
          items = request.data
          total = 0
          result = []

          for item in items:
              try:
                  product = Product.objects.get(pk=item['id'])
                  count = item['count']
                  sum = product.price * count
                  total += sum
                  result.append({
                      'id': product.id,
                      'name': product.name,
                      'price': product.price,
                      'count': count,
                      'sum': sum,
                  })
              except Product.DoesNotExist:
                  return Response(
                      {'error': f'Product with id {item["id"]} not found'},
                      status=status.HTTP_404_NOT_FOUND
                  )

          return Response({
              'items': result,
              'message': f'Total sum: {total}'
          })

