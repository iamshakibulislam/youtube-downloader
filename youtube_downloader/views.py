from django.shortcuts import render,redirect
from bs4 import BeautifulSoup
from django.http import JsonResponse
from requests_html import HTMLSession

def index(request):
	return render(request,'index.html')


def urlsubmit(request):
	json={}
	if request.method == 'GET':
		link = request.GET['link']
		session=HTMLSession()
		content=session.get('https://savemedia.website/v9/?url='+link)
		content=session.get('https://savemedia.website/v9/?url='+link)

		soup=BeautifulSoup(content.html.html,'lxml')
		thumbnail=str(soup.find(attrs={'class':'img-responsive'}))
		json['thumbnail']=thumbnail
		title=soup.find('h3',attrs={'class':'text-primary'})
		json['title']=str(title.string)
		hd=str(soup.find('a',attrs={'class':'btn-danger'}))
		json['hd']=hd

		table=str(soup.find('table',attrs={'class':'table-striped'}))
		json['table']=table

		


		
		return JsonResponse(json,safe=False)

