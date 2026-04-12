from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Product, Category
from ..serializers import ProductSerializer, CategorySerializer
from django.shortcuts import get_object_or_404

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'

class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        category = get_object_or_404(Category, pk=category_id)

        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = ProductSerializer(queryset, many=True)
        
        fields = request.query_params.get('fields')
        if fields:
            field_list = fields.split(',')
            data = [
                {key: item[key] for key in field_list if key in item}
                for item in serializer.data
            ]
            return Response(data)
        
        return Response(serializer.data)

class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = CategorySerializer(queryset, many=True)
        
        fields = request.query_params.get('fields')
        if fields:
            field_list = fields.split(',')
            data = [
                {key: item[key] for key in field_list if key in item}
                for item in serializer.data
            ]
            return Response(data)
        
        return Response(serializer.data)