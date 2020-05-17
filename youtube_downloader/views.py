from django.shortcuts import render,redirect
from bs4 import BeautifulSoup
from django.http import JsonResponse
from requests_html import HTMLSession,AsyncHTMLSession
import time
import json
import requests
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
		json['url'] = link

		



		
		return JsonResponse(json,safe=False)


def download(request):
	if request.method == 'GET':
		lnk=str(request.GET['link'])
		formt=str(request.GET['format'])

		contents=requests.get('https://loader.to/ajax/download.php?start=1&end=20&format='+formt+'&url='+lnk)
		js=json.loads(contents.content)
		id_num=js['id']

		api={'download_url':None}
		while api['download_url'] == None:

			server=requests.get('https://loader.to/ajax/progress.php?id='+id_num)
			api=json.loads(server.content)

		downloadlink=api['download_url']



		


		

		return JsonResponse({'link':downloadlink},safe=False)


